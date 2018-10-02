<?php

namespace WorkshopBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function homeAction()
    {
        return $this->render('WorkshopBundle:Default:homepage.html.twig');
    }
}
