/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
     if(l1 === null) {
         return l2
        }else if(l2 === null){
            return l1
        }else if(l1 < l2){
            l1.next = mergeTwoLists(l1.next,l2)
            return l1
        }else{
            l2.next = mergeTwoLists(l2.next,l1)
            return l2
        }
};