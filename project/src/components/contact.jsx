import React from 'react'
const Contact = () => {
    const mapObj = {
        key: 'service.GfLl3SMetBgj8XcF3qTlS6Zi4fzaXg6EvRZyKLNd',
        type: 'neshan',
        zoom: '14',
        lat: '35.254981',
        long: '58.285818',
        width: '500',
        height: '400',
        marker: 'blue'
    }
    const mapUrl = `https://api.neshan.org/v2/static?key=${mapObj.key}&type=${mapObj.type}&zoom=${mapObj.zoom}&center=${mapObj.lat},${mapObj.long}&width=${mapObj.width}&height=${mapObj.height}&marker=${mapObj.marker}`
    return (
        <div className="container-fluid">
            <div className="row bg-light border rounded m-2">

                <div className="col-6">
                    <form>
                        <div className="card border-primary rounded m-2">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2">
                                    <h3>
                                        <i className="fa fa-envelope" /> فرم
                                        تماس با من
                                    </h3>
                                    <p className="m-0">
                                        کافیه موارد زیر رو پر کرده و روی دکمه
                                        ارسال کلیک کنید
                                    </p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-user text-info" />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullname"
                                            placeholder="نام و نام خانوادگی"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-envelope text-info" />
                                            </div>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="آدرس ایمیل"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-comment text-info" />
                                            </div>
                                        </div>
                                        <textarea
                                            className="form-control"
                                            placeholder="متن جهت ارسال"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input
                                        type="submit"
                                        value="ارسال"
                                        className="btn btn-info btn-block rounded-0 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <p className="lead m-2">
                        <span className="fa fa-envelope m-1" />
                        اطلاعات تماس
                    </p>
                    <p className="m-2">
                        <span className=" fa fa-envelope-open">
                            آدرس ایمیل
                        </span>
                        <span style={{ fontFamily: 'monospace' }} className="m-2 font-weight-bold">
                            amircjh2@gamil.com
                        </span>
                    </p>
                    <p className="m-2">
                        <span className="fa fa-address-card">آدرس :</span>
                        <span className="m-2">استان خراسان رضوی شهرستان خلیل آباد</span>
                    </p>
                    <img src={mapUrl} alt="نقشه مکان" className="img-fluid img-thumnail m-2" />
                </div>
            </div>
        </div>
    );
}

export default Contact;