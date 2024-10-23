import { merge } from '../src/merge';

describe('Merge Array', () => {
  test('merge empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result:number[] = []
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge with one empty ascending array', () => {
    const collection_1: number[] = [1,2,3];
    const collection_2: number[] = [];
    const collection_3: number[] = [8,7,6,5,4];
    const result:number[] =[]
    for(let i = 1; i <= 8; i++){
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge with one empty descending array', () => {
    const collection_1: number[] = [1,2,3];
    const collection_2: number[] = [4,5,6];
    const collection_3: number[] = [];
    const result:number[] =[]
    for(let i = 1; i <= 6; i++){
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge with two empty ascending array', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [5,4,3,2,1];
    const result:number[] =[]
    for(let i = 1; i <= 5; i++){
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge equal size arrays', () => {
    const collection_1: number[] = [1,4,7,10];
    const collection_2: number[] = [2,5,8,11];
    const collection_3: number[] = [12,9,6,3];
    const result:number[] =[]
    for(let i = 1; i <= 12; i++){
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge unequal size arrays', () => {
    const collection_1: number[] = [1,4,7];
    const collection_2: number[] = [2,5,8,10];
    const collection_3: number[] = [12,11,9,6,3];
    const result:number[] =[]
    for(let i = 1; i <= 12; i++){
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge with repeated element equal size arrays', () => {
    const collection_1: number[] = [1,2,2,3];
    const collection_2: number[] = [3,4,4,5];
    const collection_3: number[] = [6,6,5,1];
    const result:number[] =[]
    for(let i = 1; i <= 6; i++){
        result.push(i);
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

  test('merge with repeated element unequal size arrays', () => {
    const collection_1: number[] = [1,1,2,2];
    const collection_2: number[] = [3,3,4,4,5,5];
    const collection_3: number[] = [9,9,8,8,7,7,6,6];
    const result:number[] =[]
    for(let i = 1; i <= 9; i++){
        result.push(i);
        result.push(i);
    }
    expect(merge(collection_1, collection_2, collection_3)).toEqual(result);
  });

});