import React from 'react';
import { VscLocation } from 'react-icons/vsc';
import { BiFoodMenu, BiCoffeeTogo } from 'react-icons/bi';
import { TbCalendarStats } from 'react-icons/tb';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { BsCashCoin } from 'react-icons/bs';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function DetailCafe({ ig, title, image, location, drinkprice, foodprice, category, reservasi, time, bayar, rasa, kebersihan, kenyamanan, pelayanan }) {
  return (
    <div className="detail-page__container">
      <div className="detail-header">
        <img className="detail-header__gambar" src={image} alt="" />
        <div className="detail-header__keterangan">
          <h2 className="detail-page__title">{title}</h2>
          <h4 className="detail-header__location">
            <VscLocation /> {location}
          </h4>
          <p className="detail-header__category">
            {' '}
            <BiFoodMenu /> {category}
          </p>
          <p className="detail-header__time">
            <TbCalendarStats /> {time}
          </p>
          <p className="detail-header__foodprice">
            <RiRestaurant2Fill /> {foodprice}
          </p>
          <p className="detail-header__drinkprice">
            <BiCoffeeTogo /> {drinkprice}
          </p>
          <p className="detail-header__payment">
            <BsCashCoin /> {bayar}
          </p>
          <div className="detail-page__rating">
            <div className="card-rating">
              <div className="card-rating__name"> Rasa </div>
              <div className="card-rating__nilai">{rasa}</div>
            </div>
            <div className="card-rating">
              <div className="card-rating__name">Kebersihan</div>
              <div className="card-rating__nilai">{kebersihan}</div>
            </div>
            <div className="card-rating">
              <div className="card-rating__name">Kenyamanan</div>
              <div className="card-rating__nilai">{kenyamanan}</div>
            </div>
            <div className="card-rating">
              <div className="card-rating__name">Pelayanan</div>
              <div className="card-rating__nilai">{pelayanan}</div>
            </div>
          </div>
          <div className="information_container">
            <div className="more_information">
              <p className="for_information">More Information</p>
              <div className="contact_information">
                {' '}
                <a href={ig}>
                  {' '}
                  <FaInstagram /> Visit Us
                </a>
              </div>
            </div>
            <div className="more_reservation">
              <p className="for_reserv">For reservation</p>
              <div className="contact_reservasi">
                {' '}
                <a href={reservasi}>
                  {' '}
                  <FaWhatsapp /> Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCafe;
