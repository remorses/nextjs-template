function assert(x, name = ''): string {
    if (!x) {
        throw Error(name + ' does not exist')
    }
    return x
}

function fromEnv(x): string {
    const y = process.env[x]
    return assert(y, x)
}

export const NODE_ENV = process.env.NODE_ENV

assert(NODE_ENV, 'NODE_ENV')
