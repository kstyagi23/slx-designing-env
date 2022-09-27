function alignElm(){
    $("#appContainer").height($("#container").height() - $("#headerContainer").height());
    $("#canvasContainer").width($("#appContainer").width()-$("#managerContainer").width());
    $("#toolExp").height($("#toolManager").height() - 100);
}