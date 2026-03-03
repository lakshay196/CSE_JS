var grade = 'A';
document.write( "Entering switch block <br/>");
switch ( grade ) {
    case 'A' : document.write( "Good job <br/>");
    break;

    case 'B' : document.write ( " pretty good <br/>");
    break;

    case 'C' : document.write ( " passed <br/>");
    break;

    case 'D' : document.write ( " not so good <br/>");
    break;

    case 'F' : document.write ( " failed <br/>");
    break;

    default : document.write( "unknown grade <br/>");
}