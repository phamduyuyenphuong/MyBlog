import React from 'react';
import acoImage from '../images/aco.jpeg';
import './main.css';

const posts = [
    {
        id: 1,
        title: 'First Blog Post',
        date: '2024-08-08',
        content: 'This is the content of the first blog post. It can contain text, images, and other HTML elements.'
    },
    {
        id: 2,
        title: 'Second Blog Post',
        date: '2024-08-07',
        content: 'This is the content of the second blog post. Here you can write about anything you want to share with your readers.'
    }
];

const Main = () => {
    return (
        <div className="main-container">
            <header className="main-header">
                <div>
                    <h1>PHẠM DUY UYÊN PHƯƠNG</h1>
                    <h5>01.06.1998</h5>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div>
                <div className="blog-left">
                    <img src={acoImage} />
                </div>
                <div className="blog-right">
                    <div>
                        <span>Check Legit</span>
                        <div className='blog-buyer'>
                            Buyer:
                            <ul>
                                <li>Chuyển khoản đúng hạn</li>
                                <li>Không cod</li>
                                <li>Mong muốn được xem sản phẩm trước khi lấy</li>
                                <li>Hãy cho cổ mã vận đơn khi có</li>
                                <li>Không nhây hàng</li>
                            </ul>
                        </div>
                        <div className='blog-seller'>
                            Seller:
                            <ul>
                                <li>Chuyển khoản đúng hạn</li>
                                <li>Hạn chế cod vì chi phí khá cao</li>
                                <li>Quay video hoặc chụp ảnh sản phẩm rồi mới chốt đơn</li>
                                <li>Offer lại giá nếu thấy cổ đưa giá ko hợp lý (vì cổ ko biết giá)</li>
                                <li>Không nhây hàng</li>
                                <li>Sản phẩm có vấn đề hãy phản hồi lại nha</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="blog-info"></div>
            </div>

            <footer className="main-footer">
                <p>&copy; 2024 My Blog. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Main;