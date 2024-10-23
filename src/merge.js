"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    var result1 = mergingArray(collection_1, collection_2, false);
    var finalResult = mergingArray(result1, collection_3, true);
    return finalResult;
}
function mergingArray(a, b, reverseSecondArray) {
    var result = [];
    var i = 0;
    var j = 0;
    if (reverseSecondArray) {
        var j_1 = b.length - 1;
        while (i < a.length && j_1 >= 0) {
            if (a[i] <= b[j_1]) {
                result.push(a[i]);
                i++;
            }
            else {
                result.push(b[j_1]);
                j_1--;
            }
        }
        while (i < a.length) {
            result.push(a[i]);
            i++;
        }
        while (j_1 >= 0) {
            result.push(b[j_1]);
            j_1--;
        }
    }
    else {
        var j_2 = 0;
        while (i < a.length && j_2 < b.length) {
            if (a[i] <= b[j_2]) {
                result.push(a[i]);
                i++;
            }
            else {
                result.push(b[j_2]);
                j_2++;
            }
        }
        while (i < a.length) {
            result.push(a[i]);
            i++;
        }
        while (j_2 < b.length) {
            result.push(b[j_2]);
            j_2++;
        }
    }
    return result;
}
