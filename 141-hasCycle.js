var hasCycle = function(head){
    if(!head) return false
    let slowp = head;
    let fastp = head;
    while(fastp.next !== null && fastp.next.next !== null){
        slowp = slowp.next;
        fastp = fastp.next.next;
        if(slowp === fastp){
            return true
        }
    }
    return false
}