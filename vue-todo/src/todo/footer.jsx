import '../asserts/css/footer.stylus'

export default {
    data(){
        return {
            author:"zx"
        }
    },
    render(){
        return (
            <div class='footer'>create by :
                <span>{this.author}</span>
            </div>
        )
    }
}