var hasCycle = function(head){
    if(!head) return false
    let slowp = head;
    let fastp = head;
    while(fastp.next !== null && fastp.next.next !== null){
        slowp = slowp.next;
        fastp = fastp.next.next;
        if(slowp === fastp){
            let index1 = fastp.next;
            let index2 = head.next;
            while(index1 !== index2){
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1
        }
    }
    return null
}