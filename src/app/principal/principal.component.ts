import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
constructor(private router:Router,private route:ActivatedRoute,private authService:AuthService){

}
salir(): void{
  this.authService.logout();
  this.router.navigateByUrl("/login")
}
 irsalario(){
  this.router.navigate(["salario"], {relativeTo: this.route})
 }
 irmaterias(){
  this.router.navigate(["materias"], {relativeTo: this.route})
 }
 irtrafico(){
  this.router.navigate(["trafico"], {relativeTo: this.route})
 }

}
