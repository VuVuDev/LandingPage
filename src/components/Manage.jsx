import React from 'react'

import "../sass/Manage.scss"
import Manage_List from '../data/List_Mange'
import ManageItems from './ManageItems'

function Manage() {
  return (
    <div className='manage'>
        <div className='manage__container'>
            <div className='manage__desc'>
                <h2>Kalite ve Süreç Yönetimi</h2>
                <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            </div>
            <div className='manage__items'>
                {
                  Manage_List.map((items, index) => (
                    <ManageItems items = {items} key = {index}></ManageItems>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Manage