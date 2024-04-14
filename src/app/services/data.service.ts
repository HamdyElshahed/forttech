import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
   {
     id: '1000',
     name: 'rule 1',
     nameValid : true ,
     status : {
       isOpen : true ,
       options : [{name :"yes"}, {name : "no"} ,{name : "N/A" }],
       value : '',
       minutes : {
         isOpen : true ,
         value : ''
       },
       directions : {
         isOpen : true ,
         options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
         value : ''
       },
     },
     table : {
      isTable : false,
    }
   },
   {
     id: '1001',
     name: 'rule 2',
     nameValid : true ,
     status : {
       isOpen : true ,
       options : [{name :"yes"}, {name : "no"} ,{name : "N/A" }],
       value : '',
       minutes : {
         isOpen : false ,
         value : ''
       },
       directions : {
         isOpen : false ,
         options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
         value : ''
       },
     },
     table : {
      isTable : false,
    }
   },
   {
     id: '1002',
     name: 'rule 3',
     nameValid : true ,
     status : {
       isOpen : true ,
       options : [{name :"yes"}, {name : "no"} ,{name : "N/A" }],
       value : '',
       minutes : {
         isOpen : false ,
         value : ''
       },
       directions : {
         isOpen : false ,
         options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
         value : ''
       },
     },
     table : {
      isTable : false,
    }

   },
   {
     id: '1003',
     name: 'rule  4',
     nameValid : true ,
     status : {
       isOpen : false ,
       options : [{name :"yes"}, {name : "no"} ,{name : "N/A" }],
       value : '',
       minutes : {
         isOpen : false ,
         value : ''
       },
       directions : {
         isOpen : false ,
         options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
         value : ''
       },
     },
     table : {
      isTable : false,
    }

   },
   {
    id: '1004',
    name: 'table',
    nameValid : false ,
    status : {
      isOpen : false ,
      options : [{name :"yes"}, {name : "no"} ,{name : "N/A" }],
      value : '',
      minutes : {
        isOpen : false ,
        value : ''
      },
      directions : {
        isOpen : false ,
        options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
        value : ''
      },
    },
    table : {
      isTable : true,
      tableHeader : [],
      tableBody : [{
        isInput : false,
      }],
      value : ''
    }


   },
   {
    id: '1005',
    name: 'rule  5',
    nameValid : true ,
    status : {
      isOpen : false ,
      options : [{name :"yes"}, {name : "no"} ,{name : "N/A" }],
      value : '',
      minutes : {
        isOpen : false ,
        value : ''
      },
      directions : {
        isOpen : false ,
        options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
        value : ''
      },
    },
    table : {
     isTable : false,
   }

  },
  {
    id: '1006',
    name: 'rule  6',
    nameValid : true ,
    status : {
      isOpen : false ,
      options : [{name :"warn"}, {name : "no"} ,{name : "N/A" }],
      value : '',
      minutes : {
        isOpen : false ,
        value : ''
      },
      directions : {
        isOpen : false ,
        options : [{name :"up"}, {name : "down"} ,{name : "N/A" }],
        value : ''
      },
    },
    table : {
     isTable : false,
   }

  },
 ]
  constructor() {
   }
  getData(){
   return  this.data
  }

  updateData(id : any){
    let res= this.data.find(data => {
      data.id === id
    });
    console.log(res);
  }
}
