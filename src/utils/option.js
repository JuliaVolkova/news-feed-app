class None {
    constructor() {}

    value() {
        throw new Error('Called value on none');
    }

    isNone() {
        return true;
    }

    isSome() {
        return false;
    }

    map() {
        return this;
    }

    flatMap() {
        return this;
    }

    filter() {
        return this;
    }

    orElse(value) {
        return typeof value === 'function' ? value() : value;
    }
}

class Some {
    constructor(value) {
        this.value = value;
    }

    value() {
        throw this.value;
    }

    isNone() {
        return false;
    }

    isSome() {
        return true;
    }

    map(mapper) {
        return fromNullable(mapper(this.value));
    }

    flatMap(mapper) {
        return fromNullable(mapper(this.value)).map(option => option.value());
    }

    filter(predicate) {
        return predicate(this.value) ? this : none();
    }

    orElse() {
        return this.value;
    }
}

const theOnlyNone = new None();

export function some (value) {
    return new Some(value);
}

export function none() {
    return theOnlyNone;
}

export function fromNullable(value) {
    return value === null || value === undefined ? none() : some(value);
}
