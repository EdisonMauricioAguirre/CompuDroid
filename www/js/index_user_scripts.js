/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   Empieza cadena de enlaces dentro del mismo documento
 */
 function register_event_handlers()
 {
    
    
     /*Activa listado  */
    $(document).on("click", ".bsoftware", function(evt)
    {
         /*Destino listado */
         activate_subpage("#software"); 

    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
    }
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".bhome", function(evt)
    {
       /*Destino listado */
         activate_subpage("#home"); 

    });
    
    }
    
    {
    
    
     /*Activa listado  */
    $(document).on("click", ".bhardware", function(evt)
    {
       /*Destino listado */
         activate_subpage("#hardware"); 

    });
    
    }
    
    
    
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".bherramientas", function(evt)
    {
       /*Destino listado */
         activate_subpage("#herramientas"); 

    });
    
    }
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".sflashplayer", function(evt)
    {
       /*Destino listado */
         activate_subpage("#sflashplayer"); 

    });
    
    }
    
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".lsockets", function(evt)
    {
       /*Destino listado */
         activate_subpage("#sockets"); 

    });
    
    }
    
    
    {
    
    
     /*Activa listado  */
    $(document).on("click", ".lsamd", function(evt)
    {
       /*Destino listado */
         activate_subpage("#samd"); 

    });
    
    }
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".lsintel", function(evt)
    {
       /*Destino listado */
         activate_subpage("#sinte1"); 

    });
    
    }
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".370", function(evt)
    {
       /*Destino listado */
         activate_subpage("#s370"); 

    });
    
    }
    
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".aputa", function(evt)
    {
       /*Destino listado */
         activate_subpage("#puertos"); 

    });
    
    }
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".psub", function(evt)
    {
       /*Destino listado */
         activate_subpage("#psub"); 

    });
    
    }
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".lchequeo1", function(evt)
    {
       /*Destino listado */
         activate_subpage("#lchequeo1"); 

    });
    
    }
    
    
     {
    
    
     /*Activa listado  */
    $(document).on("click", ".lascii", function(evt)
    {
       /*Destino listado */
         activate_subpage("#Ascii"); 

    });
    
    }
    
         {
    
    
     /*Activa listado  */
    $(document).on("click", ".bpanelfrontal", function(evt)
    {
       /*Destino listado */
         activate_subpage("#PanelFrontal"); 

    });
    
    }
    
    
           {
    
    
     /*Activa listado  */
    $(document).on("click", ".bpaneltrasero", function(evt)
    {
       /*Destino listado */
         activate_subpage("#PanelTrasero"); 

    });
    
    }
    
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
