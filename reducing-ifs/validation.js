const isEmpty = (value) => {
    if (typeof value === "string") {
        return !(value);
    }

    if (typeof value === "number") {
        return false;
    }

    if (typeof value === "boolean") {
        return false;
    }

    return true;
}

module.exports = {
    isEmpty
}