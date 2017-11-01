var _ = {
    map: function (arr, callback) {
        //code here;
        for (var i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
        return arr;
    },
    reduce: function (arr, iteratee, memo) {
        // code here
        if (memo){
            var start = memo;
        } else {
            var start = 0;
        }
        for (var i = 0; i < arr.length; i++) {
            memo = iteratee(memo, arr[i])
        }
        return memo;
    },
    find: function (arr, predicate) {
        // code here;
        for (var i = 0; i < arr.length; i++) {
            if (predicate(arr[i])){
                return arr[i];
            }
        }
        return;
    },
    filter: function (arr, predicate) {
        // code here;
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function (arr, predicate) {
        // code here;
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (!predicate(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}