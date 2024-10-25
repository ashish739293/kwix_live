/***************************
  Api To sign
  **********************************/
  import { NextResponse } from "next/server";
  import * as yup from 'yup';
  import prisma from "../../../utils/services/prismadb";
  import bcrypt from 'bcrypt';
  import {signin} from "../../../utils/services/CommonService"
  import { urlValidation } from "../../../utils/tokenHandler";
  
  const schema = yup.object().shape({
      username: yup.string().required("Username is required"),
      password: yup.string().required("Password is required"),
      long_live_token: yup.string().oneOf(['0', '1']).notRequired()
  });
  
  
  export async function POST(request) {
     
      try{
          //extracting the parameters from request body
          const contentType = request.headers.get("content-type") 
          let body = await (contentType && contentType.includes("application/json") ? request.json() : {});
          await schema.validate(body);
  
          const {username,password,long_live_token="0"} = body;
          var {token} = body;
          const firebaseToken = token;
  
          // check  if user already exists in redis database
          var user_data = await prisma.users.findUnique({where:{username:username}});
  
          if(user_data === null){
              return NextResponse.json({ error: "Invalid credentials",message:"Invalid credentials...","status":401,data:{}},{status:401});
          }
  
          if (!(await bcrypt.compare(password, user_data.password))) {
              return NextResponse.json({ error: "Invalid credentials",message:"Invalid credentials...","status":401,data:{}},{status:401});
          }
  
  
          // let params = {"host":request.headers.get('host'),"upline":user_data.upline};
          let params = {"host":request.headers.get('host'),"upline":11};
          //check domain name ..............
          let urloutput = await urlValidation(params);
          if(urloutput != 'verified'){
              return NextResponse.json({ error: "Invalid Domain",message:"You don't have access to login on this domain. Contact to your account Manager..","status":401},{status:401});
          }
  
          let signinResult = await signin(long_live_token,user_data,firebaseToken,username);
          console.log(signinResult);
  
          return NextResponse.json({status: 200, message: "Logged In Successfully",data: signinResult });
  
      }catch(error){
          return NextResponse.json({status: 500,error:error.message});
      }finally{
          prisma.$disconnect();
      }
  }