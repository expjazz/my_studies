function cycle(head) {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === next) break;
  }
  if (!fast || !fast.next) {
    return null;
  }
  let countCycle = cycleLength(fast);
  return helper(head, num)
}

function countCycle(head) {
  let one = head;
  let count = 0;
  while (true) {
    one = one.next;
    count +=1;
    if (one === head) break;
  }
  return count
}

function helper(head, num) {
  let one = head;
  let two = head;
  while (num) {
    two = two.next;
    num -= 1;
  }

  while (two !== one) {
    one += 1;
    two += 1
  }

  return one
}