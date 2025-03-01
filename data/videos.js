const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// Desarrollar una funcion que me devuelva el total de segundos de los videos de tipo Redux
// Transformar la cadena en objetos que pueda trabajar con los metodos vistos hasta ahora.

function getObjects(str){
  return str
    .replace('<ul>','')
    .replace('</ul>','')
    .split('</li>')
    .slice(0,-1)
    .map(video => ({
      min: parseInt(video.split('"')[1].split(':')[0]),
      seg: parseInt(video.split('"')[1].split(':')[1]),
      tipo: video.split('>')[1]
    }) 
    )   
}

function getTotalSegundos(videos, tipo){
  let totalsegundos = 0;
  videos
    .filter(video => video.tipo === tipo)
    .forEach(video => {
        totalsegundos += video.min * 60 + video.seg;
    });

  return totalsegundos;
}

function getTotalSegundos2(videos, tipo){
  
  return videos
    .filter(video => video.tipo === tipo)
    .reduce((totalSegundos, video) => totalSegundos + (video.min*60 + video.seg), 0);

}

//[1,3,4,5,6].reduce((total, num) => total+ num);

console.log(getTotalSegundos2(getObjects(str), 'Flexbox Video'));

// VOLVEMOS 9:35!!

