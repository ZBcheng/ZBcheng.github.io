function show_sidebar() {
    var elems = document.getElementById('slide-out');
    var instances = M.Sidenav.init(elems);
    instances.open()
}