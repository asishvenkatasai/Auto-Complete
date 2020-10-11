import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TalkWithDbServiceService } from '../talk-with-db-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  allPlaces;
  oldSearchPlaces;
  newSearchPlaces;
  popularCities;
  popularColleges;
  searchplace:string;
  basicSuggestion:boolean;
  noResult:boolean;
  public searchPlace: string;
  constructor(public talkWithDbService: TalkWithDbServiceService) {
    this.basicSuggestion=true;
  }
  
  ngOnInit(): void {
    console.log("ok");
    this.talkWithDbService.getAllPlacesInfo()
      .subscribe((data) => {
        this.allPlaces = data[0].data.result;
        console.log(this.allPlaces);
        this.newSearchPlaces = this.allPlaces;
        this.oldSearchPlaces = this.allPlaces;
        
        this.popularCities=this.allPlaces.filter(element => {
          if(element.secondary_name =="")
            return element;
        });
        this.popularColleges=this.allPlaces.filter(element => {
          if(element.secondary_name !=="")
          return element;
        });
        this.popularCities=this.popularCities.slice(0,2);
        this.popularColleges=this.popularColleges.slice(0,4);
        console.log(this.popularCities);
        console.log(this.popularColleges);
        this.newSearchPlaces=this.newSearchPlaces.slice(0,0);
        this.oldSearchPlaces=this.oldSearchPlaces.slice(0,0);
      },
        (err) => {
          console.log(err);
        })
  }

   fun() {
    console.log(this.searchPlace);
    // console.log(this.allPlaces);
    if(this.searchPlace.length<3)
    {
       console.log("predifined");
       this.basicSuggestion=true;
       this.newSearchPlaces=this.newSearchPlaces.slice(0,0);
     this.oldSearchPlaces=this.oldSearchPlaces.slice(0,0);
    }
    else{
      console.log("updated");
      this.basicSuggestion=false;
     this.oldSearchPlaces = this.newSearchPlaces;
 
     var regex = new RegExp(this.searchPlace, 'gi');
     this.newSearchPlaces = this.allPlaces.filter(item => {
       console.log(item.combined_name);
       return item.combined_name.match(regex);
     });
 
     console.log(this.newSearchPlaces);
     console.log(this.oldSearchPlaces);
     this.newSearchPlaces=this.newSearchPlaces.slice(0,5);
     this.oldSearchPlaces=this.oldSearchPlaces.slice(0,5);
     if (this.newSearchPlaces.length < 5) {
       var i = 0;
       while (this.newSearchPlaces.length < 5 && i < (this.oldSearchPlaces.length)) {
        var match=true;
         for(let j=0;j<this.newSearchPlaces.length;j++)
         {
           if(this.oldSearchPlaces[i].id == this.newSearchPlaces[j].id)
           match=false;
         }
         if(match)
         this.newSearchPlaces.push(this.oldSearchPlaces[i]);
         i++;
       }
       i = 0;
     }
     if (this.newSearchPlaces.length == 0)
       this.noResult=true;
     else
       this.noResult=false;
     }
  }
}
