function pieceOfPie(pies, first, last){

    const firstIndex = pies.indexOf(first);
    const lastIndex = pies.indexOf(last);

    return pies.slice(firstIndex, lastIndex+1);

   







} pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');