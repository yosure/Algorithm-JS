//Definition for singly-linked list.
class ListNode {
    constructor(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}
    var n1 = new ListNode(1,undefined)
    var n2 = new ListNode(2,n1)
    var n3 = new ListNode(2,n2)
    var head = new ListNode(1,n3)

    console.log(head)

    var  isPalindrome = function(head){
        const vals = [];
        while(head !== null){
            vals.push(head.val);
            head = head.next;
        }
        console.log(vals)
        for(i=0,j=vals.length-1;i<j;i++,j--){
            if(vals[i] !== vals[j]){
                return false;
            }
        }
        return true
    }

    console.log(isPalindrome(head))


