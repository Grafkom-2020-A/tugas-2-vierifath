function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");
  
  var verticesLeft = [];
  var verticesRight = [];
  var verticesCenter = [];

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
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    []
  ];

  var cubeWhite = [
    [-0.025, 0.025, 0.025],
    [-0.025, -0.025, 0.025],
    [0.025, -0.025, 0.025],
    [0.025, 0.025, 0.025],
    [-0.025, 0.025, -0.025],
    [-0.025, -0.025, -0.025],
    [0.025, -0.025, -0.025],
    [0.025, 0.025, -0.025],
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


  function quad(cube , cubeColor, cubeNormal, a, b, c, d, vertices) {
    var indices = [a, b, c, c, d, a];

    for (var i = 0; i < indices.length; i++) {
      var point = cube[indices[i]];
      for (var j = 0; j < point.length; j++) {
        vertices.push(point[j]);
      }
      var color = cubeColor[a];
      for (var j = 0; j < color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = cubeNormal[a];
      for (var j = 0; j < normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }


  quad(cubePoints1, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints2, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints3, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints3, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints4, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints4, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints5, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints5, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints6, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints6, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints6, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints6, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints6, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints6, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints7, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints7, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints7, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints7, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints7, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints7, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints8, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft); 


  quad(cubePoints9, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints10, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints10, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints10, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints10, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints10, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints10, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints11, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints11, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints11, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints11, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints11, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints11, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints12, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints12, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints12, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints12, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints12, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints12, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints13, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints13, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints13, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints13, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints13, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints13, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints14, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints14, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints14, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints14, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints14, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints14, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 1, 2, 3, 0, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 2, 6, 7, 3, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 3, 7, 4, 0, verticesCenter);
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 4, 5, 1, 0, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 5, 4, 7, 6, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 6, 2, 1, 5, verticesCenter);


  

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
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");
  

  gl.enable(gl.DEPTH_TEST);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  // var nVertex = 36 * 7;

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
  gl.uniform3fv(uLightPosition, [0, 0, 0]);
  var uSpecularColor = gl.getUniformLocation(shaderProgram, 'u_Specularcolor');
  var shininessVal = gl.getUniformLocation(shaderProgram, 'shininessVal');

 
  let lightPositionX = 0;
  let lightPositionZ = 0;
  var linearspeed = 0.1;
  var angularspeed = glMatrix.glMatrix.toRadian(1);

  function onKeyDown(event) {
    console.log(event.keyCode);

    // Untuk testing rotation

    // if (event.keyCode == 65) {
    //   glMatrix.mat4.rotate(view, view, angularspeed, [0.0, -linearspeed, 0.0]);
    // } 
    // else if (event.keyCode == 68) {
    //   glMatrix.mat4.rotate(view, view, angularspeed, [0.0, linearspeed, 0.0]);
    // } 

    if (event.keyCode == 38) {

      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[2 + i] += 0.01;
        }
      }

      lightPositionZ += 0.01;
    } 
    if (event.keyCode == 40) {
      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[2 + i] -= 0.01;
        }
      }
      lightPositionZ -= 0.01;
    }

    if (event.keyCode == 39) {

      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[i] += 0.01;
        }
      }

      lightPositionX += 0.01;
    } 
    if (event.keyCode == 37) {
      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[i] -= 0.01;
        }
      }
      lightPositionX -= 0.01;
    }
  }
  document.addEventListener('keydown', onKeyDown);


  const drawVertices = (objectVertices, shininess, clear) => {
    var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectVertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

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

    gl.uniformMatrix4fv(u_Model, false, model);
    gl.uniformMatrix4fv(u_View, false, view);

    // adjust lighting
    gl.uniform3fv(uLightPosition, [lightPositionX, 0, lightPositionZ]);
    // gl.uniform3fv(uSpecularColor, [1.0, 1.0, 1.0]);

    var normalModel = glMatrix.mat3.create();

    gl.uniform1f(shininessVal, shininess);
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        if (clear) {
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      }
      gl.drawArrays(primitive, offset, objectVertices.length / 9);
  }

  function render() {
    gl.clearColor(0, 0.15, 0, 1)
    drawVertices(verticesLeft, 100, true);
    drawVertices(verticesRight, 1, false);
    drawVertices(verticesCenter, 300, false);
    requestAnimationFrame(render);
    resizer();
  }
  requestAnimationFrame(render);

  function resizer() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    minVal = Math.min(gl.canvas.width, gl.canvas.height);
    gl.viewport(gl.canvas.width / 2 - minVal / 2, gl.canvas.height / 2 - minVal / 2, minVal, minVal);
  }

  window.addEventListener('resize', resizer);
  
}
