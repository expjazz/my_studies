const monotonic = (arr) => {
      const hash = {};
    let nextNonFirst = -9;
    let greater;

    let i = 0;
    let flag;
    while (i < A.length) {
        if (i === 0) hash[A[i]] = [A[i]] 
        if (i === 1) {
            while(A[i] === A[i - 1]) i++
            nextNonFirst = i;
        }
        
        if (nextNonFirst === i) {
            if (A[i] > A[0]) {
                flag = true;
                
            } else {
                flag = false;
            }
            hash[A[i]] = A[i];
        }
        
        if (i > nextNonFirst && i !== 0) {
            if (flag && A[i] < A[i - 1]) return false
            if (!flag && A[i] > A[i - 1]) return false
            hash[A[i]] = A[i]
        }
        if (greater) return false
        i++;
    }
    return true

}