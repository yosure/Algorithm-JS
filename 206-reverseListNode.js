// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//     }
class ListNode {
    constructor(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}
var n1 = new ListNode(5,undefined)
var n2 = new ListNode(4,n1)
var n3 = new ListNode(3,n2)
var n4 = new ListNode(2,n3)
var head = new ListNode(1,n4)

console.log(head)

var reverseList = function(head) {
    let prew = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next =prew;
        prew = curr;
        curr = next
    }
    return prew;
};
console.log(reverseList(head))