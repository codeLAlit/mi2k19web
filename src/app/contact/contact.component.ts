import { Component, OnInit } from '@angular/core';
import {organs} from '../organs'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
	
	organs=organs;

}
