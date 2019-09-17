import _ from 'lodash';

export function paginate(post , currentPage , pageSize) {
    const startIndex = (currentPage - 1 ) * pageSize;
    return _(post).slice(startIndex).take(pageSize).value();
<<<<<<< HEAD
}
=======
}
>>>>>>> 36f07fa86c7f9192bc971f4d2c296b7f1df988ee
