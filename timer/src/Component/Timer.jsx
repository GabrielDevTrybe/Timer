import React from 'react';



function Timer() {
  return (
    <section className='container'>
      <div id='timer' className='timer'>00:00:00</div>

      <div className='input-container'>
        <div>
          <label for="hour">Horas</label>
          <input className='hour' value='00' type='number' name='' max='99' min="0" />
        </div>

        <div>
          <label for="minutes">Minutos</label>
          <input className='minutes' value='00' type='number' name='' max='99' min="0" />
        </div>

        <div>
          <label for="seconds">Segundos</label>
          <input className='seconds' value='00' type='number' name='' max='99' min="0" />
        </div>
      </div>

      <div className='button-vai'>
        <button className='btn btn-danger'>Vai teia Vai</button>
      </div>

    </section>
  );
};

export default Timer;