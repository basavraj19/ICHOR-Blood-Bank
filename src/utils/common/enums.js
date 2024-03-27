const bloodGroups ={
    APostitive :  'A+',
    ANegative : 'A-',
    BPostitive :  'B+',
    BNegative : 'B-',
    OPostitive :  'O+',
    ONegative : 'O-',
    ABPostitive :  'AB+',
    ABNegative : 'AB-'
}

const status ={
    Initiated : 'Initiated',
    Pending : 'Pending',
    Fullfilled : 'Fullfilled',
    Cancelled : 'cancelled'
}

const bloodType = {
    wholeBlood : 'Whole Blood',
    PRBCs : 'PRBCs'
}

const processingStatus ={
    Processed : 'processed',
    UnProcessed : 'unprocessed'
}
module.exports = {
    BloodGroups : bloodGroups,
    Status : status,
    BloodType : bloodType,
    ProcessingStatus : processingStatus
}