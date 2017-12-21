import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

declare var window: any;
declare var FB: any;

@Injectable()
export class WorkoutService {

    apiRoot: string;   
    me: User;

    constructor(private http: Http, private router: Router) {
        this.apiRoot = `//${window.location.hostname}:8081` 
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '224162594792037',
              cookie     : true,
              xfbml      : true,
              version    : 'v2.11'
            });
              
            FB.AppEvents.logPageView();   
              
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = <HTMLScriptElement>d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
    }

    loginFB() {
        FB.login((response: any) => {
            if (response.authResponse) {
             console.log(response);

             FB.api('/me?fields=name,email,picture', (response: any) => {
               
               this.login(response.name, 'password', response.id.data.url);
               console.log(response);
             });

            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        }, { scopes: 'email,user_photos,user_posts'});
    }

    login(name: string, password: string, fbid?: string, pic?: string){

        this.me = new User(name, fbid, pic);

        this.http
        .post(this.apiRoot + "/track/users", { name, password, fbid, pic}).subscribe( data => {
            this.me = data.json();
            this.router.navigate(['/track'])
            
          },
          err => {
            console.log(err);
          },
          () => {}
        );
       
    }
           
        
        
}

