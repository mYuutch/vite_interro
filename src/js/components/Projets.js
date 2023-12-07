export default function Projets(){
    return{
        filter: "all",
        images: [
            { id:1, category:'js', url:'https://picsum.photos/500/500?random=1'},
            { id:2, category:'php', url:'https://picsum.photos/500/500?random=2'},
            { id:3, category:'php', url:'https://picsum.photos/500/500?random=3'},
            { id:4, category:'js', url:'https://picsum.photos/500/500?random=5'},
            { id:5, category:'js', url:'https://picsum.photos/500/500?random=4'},
            { id:6, category:'js', url:'https://picsum.photos/500/500?random=6'},
        ],
        setFilter(filter){
            this.filter = filter
        },
        openImage(){
            this.openedImage = image;
            this.isImageOpened = true;
        },
        closeImage(){
            this.isImageOpened = false
        }
    }
}