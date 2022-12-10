import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function CafeAppJumbotron() {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="column-header">
          <img
            src="/images/bgimg.png"
            alt=""
            width="80%
          "
          />
        </div>
        <div className="column-header">
          <article className="jumbo_title">
            <h2 id="judul">WELCOME TO FIND CAFE</h2>
            <p id="isi">
              Salah satu website yang menampilkan rekomendasi dan informasi berbagai coffeshop di Kota Bandung. Selain itu, anda dapat langsung melakukan reservasi terhadap coffeshop yang telah anda pilih dan menghubungkan anda langsung
              dengan coffeshop tersebut{' '}
            </p>
            <p className="read-more_list">
              <a href="#list_cafe">
                {' '}
                <BsChevronDown /> read more
              </a>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default CafeAppJumbotron;
