import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private lognService:LoginService){}
    intercept(req: HttpRequest<any>, 
                    next: HttpHandler
                    
            ): Observable<HttpEvent<any>> {
        //add the hwt token(local storage) request
        let authReq=req;
        const token=this.lognService.getToken();
        if(token!=null){
                authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}`},
            });
        }
        return next.handle(authReq);

    }

}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]