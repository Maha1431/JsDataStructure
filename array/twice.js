
  function printRepeating(arr , size)
  {
      var i, j;
      console.log("Repeated Elements are :");
      for (i = 0; i < size-1; i++)
      {
          for (j = i + 1; j < size; j++)
          {
              if (arr[i] == arr[j])
                  console.log(arr[i] + " ");
          }
      }
  }

var arr = [0, 1, 33, 44, 77, 55, 88, 99, 22, 33, 444, 66, 77];
var arr_size = arr.length;
printRepeating(arr, arr_size);


