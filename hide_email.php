<?php

// Original: http://www.maurits.vdschee.nl/php_hide_email/
function hide_email($email, $wrap_link = true, $link_content = null)
{
  $character_set = '+-.0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
  $key = str_shuffle($character_set); $cipher_text = ''; $id = 'e'.rand(1,999999999);
  for ($i=0;$i<strlen($email);$i+=1) $cipher_text.= $key[strpos($character_set,$email[$i])];
  $script = 'var a="'.$key.'";var b=a.split("").sort().join("");var c="'.$cipher_text.'";var d="";';
  $script.= 'for(var e=0;e<c.length;e++)d+=b.charAt(a.indexOf(c.charAt(e)));';
  $script.= 'document.getElementById("'.$id.'").innerHTML=';
  if ($wrap_link) {
    $script.= '"<a href=\\"mailto:"+d+"\\">';
    if ($link_content)
      $script.= str_replace('"', '\"', $link_content);
    else
      $script.= '"+d+"';
    $script.= '</a>"';
  }
  else {
    $script.= 'd';
  }
  $script = "eval(\"".str_replace(array("\\",'"'),array("\\\\",'\"'), $script)."\")";
  $script = '<script type="text/javascript">/*<![CDATA[*/'.$script.'/*]]>*/</script>';
  return '<span id="'.$id.'">[javascript protected email address]</span>'.$script;
}

?>
