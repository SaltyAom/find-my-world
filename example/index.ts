import FindMyWorld from '../src'
import { removeDuplicateSlashes } from '../src/lib/utils'

const router = new FindMyWorld()

router
    .on('GET', '/id/:id', "a")
    .on('GET', '/my/path', "a")
    .on('GET', '/a/b/c', "a")
    .on('GET', '/a/b/d', "a")
    .on('GET', '/a/b/id/:id', "a")
    .on('GET', '/a/b/id/:id/a', "a")

console.log("Route", router.routes)

console.log('\n\n', router.find('GET', 'http://localhost:8080/id/1'))
console.log(router.find('GET', '/id/:id'))
console.log(router.find('GET', '/my/path'))
console.log(router.find('GET', 'http://localhost:8080/a/b/c'))
console.log(router.find('GET', '/a/b///d?awd=d&a=c'))
console.log(router.find('GET', '/a/b/id/a/a?awd=d&a=c'))

console.dir(router.routes, {
    depth: null
})
