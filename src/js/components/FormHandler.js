export default function FormHandler(){
    return{
        formData: {name: '', email: '', message: ''},
        submitForm(){
            if(this.formData.name && this.formData.email && this.formData.message) {
                // Code pour soumettre le form..........
                console.log('transmis :', this.formData)
            } else {
                alert('AAAAAAAAAAAAAAAAAAA')
            }
        }
    }
}