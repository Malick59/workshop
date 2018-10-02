<?php

namespace WorkshopBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class WisController extends Controller
{
    /**
     * @Route("/")
     */
    public function homeAction()
    {
        return $this->render('WorkshopBundle:Wis:subhomepage.html.twig');
    }
}