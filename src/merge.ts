export function merge(collection_1:number[], collection_2:number[], collection_3:number[]): number[] {
    const result1 = mergingArray(collection_1, collection_2,false);
    const finalResult = mergingArray(result1,collection_3,true);
    return finalResult;
}

function mergingArray(a:number[], b:number[], reverseSecondArray:boolean): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    if(reverseSecondArray){
        let j = b.length -1;
        while(i<a.length && j >=0){
            if(a[i] <= b[j]){
                result.push(a[i]);
                i++;
            } else{
                result.push(b[j]);
                j--;
            }
        }
        while(i<a.length){
            result.push(a[i]);
            i++;
        }
        while(j >=0){
            result.push(b[j]);
            j--;
        }

    }else{
        let j=0;
        while(i<a.length && j < b.length){
            if(a[i] <= b[j]){
                result.push(a[i]);
                i++;
            } else{
                result.push(b[j]);
                j++;
            }
        }
        while(i<a.length){
            result.push(a[i]);
            i++;
        }
        while(j < b.length){
            result.push(b[j]);
            j++;
        }
    }

    return result;
}



