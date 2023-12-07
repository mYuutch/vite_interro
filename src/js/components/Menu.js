export default function Menu(){
    return{
        menuOpen:false,
        toggleMenu(){
            this.menuOpen = !this.menuOpen
        },
        isMenuOpen(){
            return window.matchMedia('(min-width: 768px)').matches || this.menuOpen;
        }
    }
}