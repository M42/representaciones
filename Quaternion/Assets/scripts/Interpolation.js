#pragma strict

var ray;
private var rayHit : RaycastHit;

var t : float;
var capsule : GameObject;
var sphere : GameObject;
private var clicked : GameObject;
var xRotor : GameObject;
var yRotor : GameObject;
var zRotor : GameObject;
var xColor : Color;
var yColor : Color;
var zColor : Color;

private var initial : Quaternion;
private var end : Quaternion;
private var interpolated;
private var last_rotation : Quaternion;

private var enable_anim : boolean;

function Start () {
  interpolated = false;
  t = 0;
  enable_anim = false;
  end = new Quaternion(-0.5, 0.5, 0.5, 0.5);
}

function Update () {
  ray = Camera.main.ScreenPointToRay(Input.mousePosition);

  // detect a click on the sphere
  if (Input.GetMouseButtonUp(0)) {
    if (Physics.Raycast(ray, rayHit)) {
      clicked = rayHit.collider.gameObject;

      if (clicked == sphere) {
          interpolated = true;
          last_rotation = capsule.transform.rotation;
          Debug.Log("last:"+last_rotation);
          xRotor.GetComponent.<Renderer> ().material.SetFloat ("_Mode", 3);
          xRotor.GetComponent.<Renderer> ().material.SetInt("_SrcBlend", UnityEngine.Rendering.BlendMode.SrcAlpha);
          xRotor.GetComponent.<Renderer> ().material.SetInt("_DstBlend", UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
          xRotor.GetComponent.<Renderer> ().material.SetInt("_ZWrite", 0);
          xRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHATEST_ON");
          xRotor.GetComponent.<Renderer> ().material.EnableKeyword("_ALPHABLEND_ON");
          xRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
          xRotor.GetComponent.<Renderer> ().material.renderQueue = 3000;

          yRotor.GetComponent.<Renderer> ().material.SetFloat ("_Mode", 3);
          yRotor.GetComponent.<Renderer> ().material.SetInt("_SrcBlend", UnityEngine.Rendering.BlendMode.SrcAlpha);
          yRotor.GetComponent.<Renderer> ().material.SetInt("_DstBlend", UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
          yRotor.GetComponent.<Renderer> ().material.SetInt("_ZWrite", 0);
          yRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHATEST_ON");
          yRotor.GetComponent.<Renderer> ().material.EnableKeyword("_ALPHABLEND_ON");
          yRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
          yRotor.GetComponent.<Renderer> ().material.renderQueue = 3000;

          zRotor.GetComponent.<Renderer> ().material.SetFloat ("_Mode", 3);
          zRotor.GetComponent.<Renderer> ().material.SetInt("_SrcBlend", UnityEngine.Rendering.BlendMode.SrcAlpha);
          zRotor.GetComponent.<Renderer> ().material.SetInt("_DstBlend", UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
          zRotor.GetComponent.<Renderer> ().material.SetInt("_ZWrite", 0);
          zRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHATEST_ON");
          zRotor.GetComponent.<Renderer> ().material.EnableKeyword("_ALPHABLEND_ON");
          zRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
          zRotor.GetComponent.<Renderer> ().material.renderQueue = 3000;

         xRotor.GetComponent.<Renderer> ().material.color.a = 0.3;
         yRotor.GetComponent.<Renderer> ().material.color.a = 0.3;
         zRotor.GetComponent.<Renderer> ().material.color.a = 0.3;
        initial = capsule.transform.rotation;
        enable_anim = true;
      }
    }
  }
  
  if (enable_anim) {
    // update animation
    t += 0.025;
    capsule.transform.rotation = Quaternion.Slerp(initial, end, t);

    // stop animation when finished
    if (t >= 1) {
      enable_anim = false;
      t = 0;
    }
  }
}

function get_last_rotation(){
    return last_rotation;
}

function is_interpolated(){
    return interpolated;
}