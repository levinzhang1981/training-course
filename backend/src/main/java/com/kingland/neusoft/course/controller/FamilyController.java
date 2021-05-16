package com.kingland.neusoft.course.controller;

import com.kingland.neusoft.course.mapper.FamilyMapper;
import org.springframework.stereotype.Controller;

/**
 * The controller for accessing the data of family domain
 *
 * @author KSC
 */
@Controller()
public class FamilyController {

    private final FamilyMapper familyMapper;

    public FamilyController(FamilyMapper familyMapper) {
        this.familyMapper = familyMapper;
    }
}
