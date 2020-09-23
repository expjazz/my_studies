var reverseKGroup = function(head, k) {
  let listLength = 0;

  let temp = head;
  while (temp) {
      temp = temp.next;
      listLength += 1
  }

  let cycles = Math.floor(listLength / k);
  let current = head;
  let previous = null;
  for (let i = 0; i < cycles; i++) {
      if (i % 2 === 0) {
          let before = previous;
          let after = current;
          let j = 0;
          while (j < k) {
              let next = current.next;
              current.next = previous;
              previous = current;
              current = next
              j++
          }
          if (before) {
              before.next = previous
          } else {
              head = previous
          }
          after.next = current;
          previous = after;

      } else {
          let j = 0;
          while (j < k) {
              previous = current
              current = current.next;
              j++

          }


      }

  }
  return head

};