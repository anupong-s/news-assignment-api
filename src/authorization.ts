import * as express from "express";
let jwt = require("jsonwebtoken");
// var jwksClient = require("jwks-rsa");
// import { String } from 'typescript-string-operations';
// import env from "./env";
const fs = require('fs');

export function expressAuthentication(request: express.Request, securityName: string, roles?: string[]): Promise<any> {

  if (securityName === "jwt") {
    let token = request.body.token || request.query.token || request.headers["authorization"] || request.headers["Authorization"];

    return new Promise((resolve, reject) => {
        
      if (!token) {
        return reject(new Error("No token provided"));
      }

      if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
      }

      var jwt_decode = jwt.decode(token, { complete: true });
      var header = jwt_decode.header;

      const privateKey = fs.readFileSync(__dirname+'/../private.key');

      jwt.verify(token, privateKey, { algorithms: [header.alg] }, (err: any, decoded: any) => {
          if (err) {
            return reject(err);
          } else {
            if (roles) {
              if(!decoded.role)  {
                return reject({ "status": 403, "message": "Forbidden" });
              }
              
              return resolve(decoded);
                
            }
          }
        }
      );
    });
  }
  return Promise.reject({});
}

function compare(arr1, arr2) {
  let result = false;
  if (!arr1 || !arr2) return;
  arr1.forEach((e1, i) =>
    arr2.forEach(e2 => {
      if (e1 == e2) {
        result = true;
      }
    })
  );
  return result;
}
