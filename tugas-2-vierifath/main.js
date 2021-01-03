function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  canvas.width  = innerWidth;
  canvas.height = innerHeight;

    var vertices = [];


    //OBJEK SEBELAH KANAN
    var cubePoints1 = [
      [0.4183357094191, 0.3697760050126, 0.1],   
      [0.1850198880861, 0.3697760050126, 0.1],   
      [0.1850198880861, 0.2751340866928, 0.1],
      [0.4183357094191, 0.2751340866928, 0.1],  
      [0.4183357094191, 0.3697760050126, -0.1], 
      [0.1850198880861, 0.3697760050126, -0.1],
      [0.1850198880861, 0.2751340866928, -0.1],   
      [0.4183357094191, 0.2751340866928, -0.1]
                 
    ];

    var cubePoints2 = [
      [0.3724243107448, 0.2751340866928, 0.1],   
      [0.2298573359142, 0.2751340866928, 0.1],   
      [0.2298573359142, -0.2613043609749, 0.1],   
      [0.3724243107448, -0.2274749093202, 0.1],   
      [0.3724243107448,0.2751340866928, -0.1],   
      [0.2298573359142,0.2751340866928, -0.1],   
      [0.2298573359142,-0.2613043609749, -0.1],   
      [0.3724243107448,-0.2274749093202, -0.1] 
    ];
    
      var cubePoints3 = [
        [0.3724243107448,-0.2274749093202,0.1],   
        [0.4159193200152,-0.2733863079945,0.1],   
        [0.3482604167058,-0.3748746629586,0.1],   
        [0.2298573359142,-0.2613043609749,0.1],
        [0.3724243107448,-0.2274749093202,-0.1],   
        [0.4159193200152,-0.2733863079945,-0.1],   
        [0.3482604167058,-0.3748746629586,-0.1],   
        [0.2298573359142,-0.2613043609749,-0.1]    
      
      ];

      var cubePoints4 = [
        [0.4159193200152,-0.2733863079945,0.1],   
        [0.580233799481,-0.2733863079945,0.1],   
        [0.6623910392139,-0.3748746629586,0.1],   
        [0.3482604167058,-0.3748746629586,0.1],   
        [0.4159193200152,-0.2733863079945,-0.1],   
        [0.580233799481,-0.2733863079945,-0.1],   
        [0.6623910392139,-0.3748746629586,-0.1],   
        [0.3482604167058,-0.3748746629586,-0.1]      
    ];

    var cubePoints5 = [
      [0.580233799481,-0.2733863079945,0.1],   
      [0.6309779769631,-0.2274749093202,0.1],   
      [0.766295783582,-0.2613043609749,0.1],   
      [0.6623910392139,-0.3748746629586,0.1],   
      [0.580233799481,-0.2733863079945,-0.1],   
      [0.6309779769631,-0.2274749093202,-0.1],   
      [0.766295783582,-0.2613043609749,-0.1],   
      [0.6623910392139,-0.3748746629586,-0.1]         
  ];

      var cubePoints6 = [
      [0.766295783582,0.2751340866928,0.1],  
      [0.6309779769631,0.2751340866928,0.1],
      [0.6309779769631,-0.2274749093202,0.1],   
      [0.766295783582,-0.2613043609749,0.1],   
      [0.766295783582,0.2751340866928,-0.1], 
      [0.6309779769631,0.2751340866928,-0.1],  
      [0.6309779769631,-0.2274749093202,-0.1],   
      [0.766295783582,-0.2613043609749,-0.1]
      
  ];


  var cubePoints7 = [
    [0.817039961064,0.3697760050126,0.1],  
    [0.5826501888849,0.3697760050126,0.1],         
    [0.5826501888849,0.2751340866928,0.1],   
    [0.817039961064,0.2751340866928,0.1],  
    [0.817039961064,0.3697760050126,-0.1], 
    [0.5826501888849,0.3697760050126,-0.1],         
    [0.5826501888849,0.2751340866928,-0.1],
    [0.817039961064,0.2751340866928,-0.1]           
];

//OBJEK SEBELAH KIRI

var cubePoints8 = [
  [-0.4183357094191, 0.3697760050126, 0.1],   
  [-0.1850198880861, 0.3697760050126, 0.1],   
  [-0.1850198880861, 0.2751340866928, 0.1],
  [-0.4183357094191, 0.2751340866928, 0.1],  
  [-0.4183357094191, 0.3697760050126, -0.1], 
  [-0.1850198880861, 0.3697760050126, -0.1],
  [-0.1850198880861, 0.2751340866928, -0.1],   
  [-0.4183357094191, 0.2751340866928, -0.1]
             
];


var cubePoints9 = [
  [-0.3724243107448, 0.2751340866928, 0.1],   
  [-0.2298573359142, 0.2751340866928, 0.1],   
  [-0.2298573359142, -0.2613043609749, 0.1],   
  [-0.3724243107448, -0.2274749093202, 0.1],   
  [-0.3724243107448,0.2751340866928, -0.1],   
  [-0.2298573359142,0.2751340866928, -0.1],   
  [-0.2298573359142,-0.2613043609749,-0.1],   
  [-0.3724243107448,-0.2274749093202,-0.1] 
];

var cubePoints10 = [
  [-0.3724243107448,-0.2274749093202,0.1],   
  [-0.4159193200152,-0.2733863079945,0.1],   
  [-0.3482604167058,-0.3748746629586,0.1],   
  [-0.2298573359142,-0.2613043609749,0.1],
  [-0.3724243107448,-0.2274749093202,-0.1],   
  [-0.4159193200152,-0.2733863079945,-0.1],   
  [-0.3482604167058,-0.3748746629586,-0.1],   
  [-0.2298573359142,-0.2613043609749,-0.1]    

];



  var cubePoints11 = [
    [-0.4159193200152,-0.2733863079945,0.1],  
    [-0.580233799481,-0.2733863079945,0.1],  
    [-0.6623910392139,-0.3748746629586,0.1],   
    [-0.3482604167058,-0.3748746629586,0.1],   
    [-0.4159193200152,-0.2733863079945,-0.1],   
    [-0.580233799481,-0.2733863079945, -0.1],   
    [-0.6623910392139,-0.3748746629586,-0.1],  
    [-0.3482604167058,-0.3748746629586,-0.1]           
];

var cubePoints12 = [
  [-0.580233799481,-0.2733863079945,0.1],   
  [-0.6309779769631,-0.2274749093202,0.1],   
  [-0.766295783582,-0.2613043609749,0.1],   
  [-0.6623910392139,-0.3748746629586,0.1],  
  [-0.580233799481,-0.2733863079945, -0.1],   
  [-0.6309779769631,-0.2274749093202,-0.1], 
  [-0.766295783582,-0.2613043609749, -0.1],   
  [-0.6623910392139,-0.3748746629586,-0.1]       
];

  var cubePoints13 = [
    [-0.766295783582,0.2751340866928,0.1],  
    [-0.6309779769631,0.2751340866928,0.1],
    [-0.6309779769631,-0.2274749093202,0.1],   
    [-0.766295783582,-0.2613043609749,0.1],   
    [-0.766295783582,0.2751340866928,-0.1], 
    [-0.6309779769631,0.2751340866928,-0.1],  
    [-0.6309779769631,-0.2274749093202,-0.1],   
    [-0.766295783582,-0.2613043609749,-0.1]          
];


var cubePoints14 = [
  [-0.817039961064,0.3697760050126,0.1],  
  [-0.5826501888849,0.3697760050126,0.1],         
  [-0.5826501888849,0.2751340866928,0.1],   
  [-0.817039961064,0.2751340866928,0.1],  
  [-0.817039961064,0.3697760050126,-0.1], 
  [-0.5826501888849,0.3697760050126,-0.1],         
  [-0.5826501888849,0.2751340866928,-0.1],
  [-0.817039961064,0.2751340866928,-0.1]           
];

    var cubeColors = [
      [],
    [0.5, 0, 0],    
    [0.5, 0, 0],
    [0.5, 0, 0],
    [0.5, 0, 0],
    [0.5, 0, 0],
    [0.5, 0, 0],
      []
    ];

    //Kubus Cahaya

    var cubeWhite = [
      [-0.025,  0.025,  0.025],   
      [-0.025, -0.025,  0.025],   
      [ 0.025, -0.025,  0.025],   
      [ 0.025,  0.025,  0.025],   
      [-0.025,  0.025, -0.025],   
      [-0.025, -0.025, -0.025],   
      [ 0.025, -0.025, -0.025],   
      [ 0.025,  0.025, -0.025],   
    ];
  
    var cubeWhiteColors = [
      [],
      [1.0, 1.0, 1.0],    
      [1.0, 1.0, 1.0],    
      [1.0, 1.0, 1.0],    
      [1.0, 1.0, 1.0],    
      [1.0, 1.0, 1.0],    
      [1.0, 1.0, 1.0],    
  
      []
    ];

    var cubeNormalsRight = [
      [],
      [0.0, 0.0, -1.0],    
      [0.0, -1.0, 0.0],    
      [1.0, 0.0, 0.0],    
      [0.0, 1.0, 0.0],   
      [0.0, 0.0, 1.0],   
      [-1.0, 0.0, 0.0],   
      
      []
    ];

    var cubeNormalsLeft = [
      [],
      [0.0, 0.0, -1.0],    
      [0.0, -1.0, 0.0],    
      [-1.0, 0.0, 0.0],    
      [0.0, 1.0, 0.0],   
      [0.0, 0.0, 1.0],   
      [1.0, 0.0, 0.0],   
      
      []
    ];




    var cubeNormals2 = [
      [],
      [0.0, 0.0, -1.0],   
      [-1.0, 0.0, 0.0],   
      [0.0, -1.0, 0.0],    
      [1.0, 0.0, 0.0],    
      [0.0, 0.0, 1.0],    
      [0.0, 1.0, 0.0],    
      []
    ];


    
  

  function quadr(a, b, c, d, cube) {
    var indices = [a, b, c, c, d, a];
    
    for (var i=0; i<indices.length; i++) {
      var point = cube[indices[i]];  // [x, y, z]
      for (var j=0; j<point.length; j++) {
        vertices.push(point[j]);
      }
      var color = cubeColors[a]; // [r, g, b]
      for (var j=0; j<color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = cubeNormalsRight[a];
      for (var j=0; j<normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }

  function quadl(a, b, c, d, cube) {
    var indices = [a, b, c, c, d, a];
    
    for (var i=0; i<indices.length; i++) {
      var point = cube[indices[i]];  // [x, y, z]
      for (var j=0; j<point.length; j++) {
        vertices.push(point[j]);
      }
      var color = cubeColors[a]; // [r, g, b]
      for (var j=0; j<color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = cubeNormalsLeft[a];
      for (var j=0; j<normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }

  
  // Kubus Cahaya
  function quad50(a, b, c, d, cube) {
    var indices = [a, b, c, c, d, a];
    
    for (var i=0; i<indices.length; i++) {
      var point = cube[indices[i]];  // [x, y, z]
      for (var j=0; j<point.length; j++) {
        vertices.push(point[j]);
      }
      var color = cubeWhiteColors[a]; // [r, g, b]
      for (var j=0; j<color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = cubeNormals2[a];
      for (var j=0; j<normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }
  

  quadr(1, 2, 3, 0, cubePoints1); 
  quadr(2, 6, 7, 3, cubePoints1);
  quadr(3, 7, 4, 0, cubePoints1);
  quadr(4, 5, 1, 0, cubePoints1);
  quadr(5, 4, 7, 6, cubePoints1);
  quadr(6, 2, 1, 5, cubePoints1);

  quadr(1, 2, 3, 0, cubePoints2);
  quadr(2, 6, 7, 3, cubePoints2);
  quadr(3, 7, 4, 0, cubePoints2);
  quadr(4, 5, 1, 0, cubePoints2);
  quadr(5, 4, 7, 6, cubePoints2);
  quadr(6, 2, 1, 5, cubePoints2);

  quadr(1, 2, 3, 0, cubePoints3); 
  quadr(2, 6, 7, 3, cubePoints3); 
  quadr(3, 7, 4, 0, cubePoints3); 
  quadr(4, 5, 1, 0, cubePoints3); 
  quadr(5, 4, 7, 6, cubePoints3); 
  quadr(6, 2, 1, 5, cubePoints3);

  quadr(1, 2, 3, 0, cubePoints4); 
  quadr(2, 6, 7, 3, cubePoints4); 
  quadr(3, 7, 4, 0, cubePoints4); 
  quadr(4, 5, 1, 0, cubePoints4); 
  quadr(5, 4, 7, 6, cubePoints4); 
  quadr(6, 2, 1, 5, cubePoints4);

  quadr(1, 2, 3, 0, cubePoints5); 
  quadr(2, 6, 7, 3, cubePoints5); 
  quadr(3, 7, 4, 0, cubePoints5); 
  quadr(4, 5, 1, 0, cubePoints5); 
  quadr(5, 4, 7, 6, cubePoints5); 
  quadr(6, 2, 1, 5, cubePoints5);

  quadr(1, 2, 3, 0, cubePoints6); 
  quadr(2, 6, 7, 3, cubePoints6); 
  quadr(3, 7, 4, 0, cubePoints6); 
  quadr(4, 5, 1, 0, cubePoints6); 
  quadr(5, 4, 7, 6, cubePoints6); 
  quadr(6, 2, 1, 5, cubePoints6);


  quadr(1, 2, 3, 0, cubePoints7); 
  quadr(2, 6, 7, 3, cubePoints7); 
  quadr(3, 7, 4, 0, cubePoints7); 
  quadr(4, 5, 1, 0, cubePoints7); 
  quadr(5, 4, 7, 6, cubePoints7); 
  quadr(6, 2, 1, 5, cubePoints7);

  quadl(1, 2, 3, 0, cubePoints8); 
  quadl(2, 6, 7, 3, cubePoints8); 
  quadl(3, 7, 4, 0, cubePoints8); 
  quadl(4, 5, 1, 0, cubePoints8); 
  quadl(5, 4, 7, 6, cubePoints8); 
  quadl(6, 2, 1, 5, cubePoints8); 


  quadl(1, 2, 3, 0, cubePoints9); 
  quadl(2, 6, 7, 3, cubePoints9); 
  quadl(3, 7, 4, 0, cubePoints9); 
  quadl(4, 5, 1, 0, cubePoints9); 
  quadl(5, 4, 7, 6, cubePoints9); 
  quadl(6, 2, 1, 5, cubePoints9);

  quadl(1, 2, 3, 0, cubePoints10); 
  quadl(2, 6, 7, 3, cubePoints10); 
  quadl(3, 7, 4, 0, cubePoints10); 
  quadl(4, 5, 1, 0, cubePoints10); 
  quadl(5, 4, 7, 6, cubePoints10); 
  quadl(6, 2, 1, 5, cubePoints10);

  quadl(1, 2, 3, 0, cubePoints11); 
  quadl(2, 6, 7, 3, cubePoints11); 
  quadl(3, 7, 4, 0, cubePoints11); 
  quadl(4, 5, 1, 0, cubePoints11); 
  quadl(5, 4, 7, 6, cubePoints11); 
  quadl(6, 2, 1, 5, cubePoints11);

  quadl(1, 2, 3, 0, cubePoints12); 
  quadl(2, 6, 7, 3, cubePoints12); 
  quadl(3, 7, 4, 0, cubePoints12); 
  quadl(4, 5, 1, 0, cubePoints12); 
  quadl(5, 4, 7, 6, cubePoints12); 
  quadl(6, 2, 1, 5, cubePoints12);

  quadl(1, 2, 3, 0, cubePoints13); 
  quadl(2, 6, 7, 3, cubePoints13); 
  quadl(3, 7, 4, 0, cubePoints13); 
  quadl(4, 5, 1, 0, cubePoints13); 
  quadl(5, 4, 7, 6, cubePoints13); 
  quadl(6, 2, 1, 5, cubePoints13);

  quadl(1, 2, 3, 0, cubePoints14); 
  quadl(2, 6, 7, 3, cubePoints14); 
  quadl(3, 7, 4, 0, cubePoints14); 
  quadl(4, 5, 1, 0, cubePoints14); 
  quadl(5, 4, 7, 6, cubePoints14); 
  quadl(6, 2, 1, 5, cubePoints14);

  quad50(1, 2, 3, 0, cubeWhite); 
  quad50(2, 6, 7, 3, cubeWhite); 
  quad50(3, 7, 4, 0, cubeWhite); 
  quad50(4, 5, 1, 0, cubeWhite); 
 quad50(5, 4, 7, 6, cubeWhite); 
 quad50(6, 2, 1, 5, cubeWhite); 

 let min = Math.min(gl.canvas.width, gl.canvas.height);
  gl.viewport(gl.canvas.width - min, gl.canvas.height - min, min, min);


  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  var vertexShaderSource = document.getElementById("vertexShaderSource").text;
  var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;

  // Buat .c di GPU
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // Kompilasi .c agar menjadi .o
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // Siapkan wadah untuk .exe (shader program)
  var shaderProgram = gl.createProgram();

  // Masukkan .o ke dalam wadah .exe
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Sambungkan antar .o agar bisa menjadi
  //    runnable context di dalam wadah .exe tadi
  gl.linkProgram(shaderProgram);

  // Mulai menggunakan konteks (cat)
  gl.useProgram(shaderProgram);

  // Ajarkan attribute a_Position di GPU
  //  tentang pengambilan data verteks dari ARRAY_BUFFER
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");
  gl.vertexAttribPointer(
    aPositionLoc, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    0);
  gl.vertexAttribPointer(
    aColorLoc, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    3 * Float32Array.BYTES_PER_ELEMENT);
  gl.vertexAttribPointer(
    aNormalLoc, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    6 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);
  gl.enableVertexAttribArray(aNormalLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  

  gl.viewport(100, 0, canvas.height, canvas.height);
  
  gl.enable(gl.DEPTH_TEST);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  var nVertex = 36*15;

  var u_Model = gl.getUniformLocation(shaderProgram, 'u_Model');
  var u_View = gl.getUniformLocation(shaderProgram, 'u_View');
  var u_Projection = gl.getUniformLocation(shaderProgram, 'u_Projection');
  var model = glMatrix.mat4.create();
  var view = glMatrix.mat4.create();
  var projection = glMatrix.mat4.create();
  gl.uniformMatrix4fv(u_Projection, false, projection);

  var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
  var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
  gl.uniform3fv(uAmbientColor, [0.3, 0.3, 0.3]);
  var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
  gl.uniform3fv(uLightColor, [1, 1, 1]);
  var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');

  let lightPositionY = 0;
  var linearspeed = 0.1;
  var angularspeed = glMatrix.glMatrix.toRadian(1);
  function onKeyDown(event) {
  
   
  }
  document.addEventListener('keydown', onKeyDown);


  function render() {
    
   
    gl.uniformMatrix4fv(u_Model, false, model);
    gl.uniformMatrix4fv(u_View, false, view);
    gl.uniform3fv(uLightPosition, [0, lightPositionY, 0]);
    var normalModel = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normalModel, model);
    gl.uniformMatrix3fv(uNormalModel, false, normalModel);
    gl.clearColor(0.74, 0.5, 0.6, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(primitive, offset, nVertex);
    requestAnimationFrame(render);
    resizer();
  }
  requestAnimationFrame(render);

  function resizer() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    minVal = Math.min(gl.canvas.width, gl.canvas.height);
    gl.viewport(gl.canvas.width/2 -minVal/2, gl.canvas.height/2 -minVal/2,minVal,minVal);
  }

  window.addEventListener('resize', resizer);
}
