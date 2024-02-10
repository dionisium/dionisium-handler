import { Subject } from "rxjs";
import { _Serie } from "./models";

export interface _LocalData {
    type:string,
    _object:_Serie[]
}

class Data{
    data:_LocalData[] = [];
    private LocalData = new Subject<_LocalData[]>();
    
    constructor(){
        this.LocalData.subscribe((data:_LocalData[])=>{
            data = data;
        });
        setInterval(()=>{this.LocalData.next([])}, 1000*60*60*2);
    }

    next(value:_LocalData){
        this.LocalData.next([...this.data, value]);
    }

    get(type:string){
        return this.data.find((e)=>e.type == 'type');
    }
}

const localData = new Data();

export default localData;