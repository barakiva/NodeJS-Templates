import Blog from './../schemas/blog.js'

export async function init() {
    console.log('Using then')
    Blog.findOne({title: 'new blog'})
        .then((res)=> console.log(res))
    console.log('Using a callback')
    Blog.findOne({title: 'new blog'}, function(err, data) {
        console.log(`Error: ${err} and ${data}`)
        if (err) console.log(err)
        if (data) console.log(data)
    })
    console.log('Using await')
    const res = await Blog.findOne({title: 'new blog'}).exec();
    console.log(`await find is ... ${res}`)
}
